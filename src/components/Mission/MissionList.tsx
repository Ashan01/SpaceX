import React, { useState } from "react";
import { LaunchesInfoQuery } from "./../../generated/graphql";

interface Props {
   data: LaunchesInfoQuery;
}

export const MissionList: React.FC<Props> = ({ data }) => {
   let [index, setIndex] = useState(0);
   // console.log(data);
   const { launches } = data;
   console.log(launches);

   const handleChange = (e: any) => {
      console.log(e);
   };
   return (
      <div>
         <ul>
            {data.launches?.map((obj, index) => {
               return (
                  <li onClick={(e) => handleChange(index)} key={index}>
                     {obj?.mission_name}
                  </li>
               );
            })}
         </ul>
      </div>
   );
};
