import React from "react";
import { useLaunchesInfoQuery } from "./../../generated/graphql";
import { MissionList } from "./MissionList";

export const MissionConatiner = () => {
   const { data, loading, error } = useLaunchesInfoQuery();

   if (loading) {
      return <h1>Loading....</h1>;
   }
   if (error || !data) {
      return <h1>Error</h1>;
   }
   console.log(data);
   return <MissionList data={data} />;
};
