import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export const useVisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(1);

  useEffect(() => {
    const channel = supabase.channel('visitor-presence', {
      config: {
        presence: {
          key: crypto.randomUUID(),
        },
      },
    });

    channel
      .on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState();
        const count = Object.keys(state).length;
        setVisitorCount(count > 0 ? count : 1);
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          await channel.track({
            online_at: new Date().toISOString(),
          });
        }
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return visitorCount;
};
