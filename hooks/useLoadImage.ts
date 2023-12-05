import { OppImage } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadImage = (oppImage: OppImage) => {
    const supabaseClient = useSupabaseClient();

    if (!oppImage) {
        return null;
    }

    // const { data: oppImageData}
}