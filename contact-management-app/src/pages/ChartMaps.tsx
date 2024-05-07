// MainLayout.jsx
import React from 'react';
import Sidebar from '../components/Sidebar/SideBar';
import Chart from '../components/CasesChart/CasesCharts';
import Map from '../components/CasesMap/CasesMap';

const MainLayout = () => {
  return (
    <div className=" bg-custom-color flex flex-col h-screen ">
      <Sidebar /> 
      <div className="flex flex-col w-full bg-custom-color">
     
        <Chart />
        </div>
        <div className="flex flex-col w-full bg-custom-color">
        <Map />
        </div>
    </div>
  );
};

export default MainLayout;
