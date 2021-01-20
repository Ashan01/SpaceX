import gql from "graphql-tag";

export const MIssionInfo = gql`
   query LaunchesInfo {
      launches {
         mission_id
         mission_name
         launch_success
         launch_year
      }
   }
`;
