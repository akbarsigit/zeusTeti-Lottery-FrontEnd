"use client";
import Image from "next/image";
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function Home() {
  const [drawId, getLottoId] = useState([]);
  const [jackpotBal, getJackpot] = useState([]);
  const [ticketSold, getTicketSold] = useState([]);
  const [currentBalance, getLottoBalance] = useState([]);

  return (
    <div className="flex mx-auto flex-col justify-center text-center text-[#FBE3D7]">
      <p className="text-7xl  p-5">Zeus Teti Lottery</p>
      <div class="mx-auto p-3 border border-gray-200 rounded-lg shadow w-3/4">
        <p className="text-3xl p-5">Admin Panel</p>
        <p className="text-2xl p-5 ">Contract Balance</p>
        <p className="text-2xl p-5">Current Balance</p>
        <button
          onClick={""}
          className="mb-4 inline-flex bg-[#FBE3D7] border-0 py-2 px-20 focus:outline-none hover:bg-[#ad826d] rounded text-lg text-[#38232c]"
        >
          Isi Saldo
        </button>
      </div>
      <div className="flex mt-5 gap-5 justify-items-center p-10">
        <div class="mx-auto p-3 border border-gray-200 rounded-lg shadow w-3/4">
          <p>Current Draw</p>
          <p>Current Number</p>
        </div>
        <div class="mx-auto p-3 border border-gray-200 rounded-lg shadow w-3/4">
          <p>Ticket Sold</p>
          <p>Ticket Number</p>
        </div>
        <div class="mx-auto p-3 border border-gray-200 rounded-lg shadow w-3/4">
          <p>Current Jackpot</p>
          <p>Jackpot Number</p>
        </div>
      </div>
      <div>
        <p className="p-4">Ending in</p>
        <div className="justify-items-center">
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max place-content-center">
            <div className="flex flex-col p-2 bg-[#FBE3D7] rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl text-[#38232c]">
                <span style={{ "--value": 10 }}></span>
              </span>
              <p className="text-[#38232c]">hours</p>
            </div>
            <div className="flex flex-col p-2 bg-[#FBE3D7] rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl text-[#38232c]">
                <span style={{ "--value": 24 }}></span>
              </span>
              <p className="text-[#38232c]">min</p>
            </div>
            <div className="flex flex-col p-2 bg-[#FBE3D7] rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl text-[#38232c]">
                <span style={{ "--value": 5 }}></span>
              </span>
              <p className="text-[#38232c]">sec</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
