// import React from 'react'

import { useContext, useEffect, useState } from "react"
import { AdminContext } from "../../context/AdminContext"
import Button from "@mui/material/Button"
import { assets } from "../../assets/assets"
import { Card } from "@mui/material"
import { CardContent } from "@mui/material"
import { Typography } from "@mui/material"
import { CardMedia } from "@mui/material"

const Dashboard = () => {
  const { adminDash, aToken, getAdminDash } = useContext(AdminContext)
  const [info, setInfo] = useState([{}])
  useEffect(() => {
    if (aToken) {
      getAdminDash()
      setInfo(adminDash.appointmentsLatest)
      console.log(info)
    }
  }, [aToken])

  return (
    <div className="w-full p-1">
      <Button variant="contained" color="error" style={{ padding: "14px", letterSpacing: "2px", marginTop: "5px" }} className="text-center bg-[black] py-3  w-full ">Dashboard</Button>
      <div>
        {
          <div className="flex flex-col sm:flex-row gap-1 sm:justify-around m-3 w-[90%] sm:w-[80%]">
            {/* <Button className="py-2" style={{ padding: "15px", paddingLeft: "40px", paddingRight: "40px" }} variant="contained" color=""><span>Doctors : {adminDash.doctors}</span></Button> */}
            {/* <img src={assets.docgrp} /> */}

            <Card style={{ width: "230px", height: "240px" }}>
              <CardMedia
                component="img"
                image={assets.docgrp}
                alt="green iguana"
              />
              <CardContent>
                <Typography style={{ textAlign: "center" }} variant="h6">
                  <h1>Doctors : <span>{adminDash.doctors}</span></h1>
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ width: "230px", height: "240px" , textAlign:"center"}}>
              <CardMedia
                component="img"
            style={{height:"180px" , width:"100%", translate:"12px"}}
                image={assets.cal}
                alt="green "
              />
              <CardContent>
                <Typography style={{ textAlign: "center" }} variant="h6">
                  <h1>Appointments : <span>{adminDash.appointments}</span></h1>
                </Typography>
              </CardContent>
            </Card>
        <Card style={{ width: "230px", height: "240px" , textAlign:"center"}}>
          <CardMedia 
            component="img"
            style={{height:"180px" , width:"100%" , paddingTop:"10px"}}
            image={assets.pat}
          />
          <CardContent>
            <Typography style={{ textAlign: "center" }} variant="h6">
              <h1>Patients : <span>{adminDash.patients}</span></h1>
            </Typography>
          </CardContent>
        </Card>

          </div>
        }
      </div>

    </div>
  )
}

export default Dashboard