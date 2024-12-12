import React from "react";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
return (
    <>
        <h1>Dashboard component</h1>
        <Outlet />
    </>
)

}