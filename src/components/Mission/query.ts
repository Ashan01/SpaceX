import gql from "graphql-tag";

export const MIssionInfo = gql`
   query LaunchesInfo {
      launches {
         flight_number
         mission_id
         mission_name
         launch_success
         launch_year
      }
   }
`;
