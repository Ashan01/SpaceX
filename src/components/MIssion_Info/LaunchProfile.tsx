import * as React from "react";
import { LaunchMissionInfoQuery } from "../../generated/graphql";

interface Props {
   data: LaunchMissionInfoQuery;
}

export const LaunchProfile: React.FC<Props> = ({ data }) => {
   return <div></div>;
};
