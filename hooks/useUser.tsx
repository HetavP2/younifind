import { UserDetails } from "@/types";
import { User } from "@supabase/auth-helpers-nextjs";
import { createContext } from "react";
import {
  useSessionContext,
  useUser as useSupaUser,
} from "@supabase/auth-helpers-react";
import { useState, useEffect, useContext } from "react";

type UserContextType = {
  accessToken: string | null;
  user: User | null;
  userDetails: UserDetails | null;
  isLoading: boolean;
  //   opportunity: Opportunity | null;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export interface Props {
  [propName: string]: any;
}

export const MyUserContextProvider = (props: Props) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase,
  } = useSessionContext();

  const user = useSupaUser();
  const accessToken = session?.access_token ?? null;
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  // const [opportunities, setOpportunities] = useState<Opportunity | null>(null);

  const getUserDetails = () => supabase.from("users").select("*").single();
  // const getUserOpportunities = () => supabase.from("opportunities").select("*");

  useEffect(() => {
    //missing && !opportunities
    if (user && !isLoadingData && !userDetails) {
      setIsLoadingData(true);
      // after (), getUserOpportunities()
      Promise.allSettled([getUserDetails()]).then((results) => {
        const userDetailsPromise = results[0];
        // const opportunityPromise = results[1];

        if (userDetailsPromise.status === "fulfilled") {
          setUserDetails(userDetailsPromise.value.data as UserDetails);
        }

        //ERROR with following cause results[1] doesnt exist:
        // if (opportunityPromise.status === "fulfilled") {
        //     setOpportunities(opportunityPromise.value.data as Opportunity);
        // }

        setIsLoadingData(false);
      });
    } else if (!user && !isLoadingUser && !isLoadingData) {
      setUserDetails(null);
      // setOpportunities(null);
    }
  }, [user, isLoadingUser]);

  const value = {
    accessToken,
    user,
    userDetails,
    isLoading: isLoadingUser || isLoadingData,
    // opportunities,
  };

  return <UserContext.Provider value={value} {...props} />;
};

export const userUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a MyUserContextProvider");
  }
  return context;
};
