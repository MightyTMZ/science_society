"use client";

import React, { useState } from "react";
import ClassroomCopyCode from "@/components/ClassroomCopyCode/ClassroomCopyCode";
import { FaFlask, FaUsers, FaTrophy, FaCalendarAlt, FaBook } from "react-icons/fa";
import Link from "next/link";
import UpcomingEvents from "@/components/LandingPageComponents/UpcomingEvents/UpcomingEvents";

type Tab = "events" | "join" | "about" | "contests" | "curriculum";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("events");

  const tabs = [
    { id: "events" as Tab, label: "Events", icon: FaCalendarAlt },
    { id: "join" as Tab, label: "Join", icon: FaUsers },
    { id: "about" as Tab, label: "About", icon: FaFlask },
    { id: "contests" as Tab, label: "Contests", icon: FaTrophy },
    { id: "curriculum" as Tab, label: "Curriculum", icon: FaBook },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="container mx-auto px-6 py-8">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-gray-600 text-white px-6 py-2 rounded-full text-lg font-semibold">
              2025-26
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 font-bebas-neue">
              Earl Haig Science Society
            </h1>
          </div>
          <div className="relative group inline-block">
            <img 
              src="/logo.png" 
              alt="Science Society logo" 
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl group-hover:shadow-blue-500/50 border-4 border-white shadow-lg"
            />
          </div>
          <div className="mt-4">
            <Link
              href="https://20242025-earlhaigsciencesociety.vercel.app/"
              className="text-blue-400 font-semibold text-sm transition duration-300 hover:text-blue-300"
            >
              2024-2025 website
            </Link>
          </div>
        </div>

        {/* Tabbed Content */}
        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="bg-white rounded-t-2xl shadow-lg border-b border-gray-200 overflow-x-auto">
            <div className="flex">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex-1 px-6 py-4 text-center font-semibold transition-all duration-200
                      flex items-center justify-center gap-2 min-w-[120px]
                      ${isActive 
                        ? "bg-gradient-to-r from-blue-600 to-gray-600 text-white border-b-4 border-blue-400" 
                        : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                      }
                    `}
                  >
                    <Icon className={isActive ? "text-white" : "text-gray-500"} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-b-2xl shadow-xl p-6 md:p-8 border border-gray-100 min-h-[400px]">
            {activeTab === "events" && (
              <div>
                <UpcomingEvents />
              </div>
            )}

            {activeTab === "join" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <FaUsers className="mr-3 text-blue-600" />
                  Join Science Society
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Who Can Join?</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Science Society is open to all Earl Haig students, regardless of grade or science background. 
                      We welcome anyone who is curious about science — no prior experience or applications are required.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Our goal is to create a supportive, inclusive space where students can explore science at their 
                      own pace, whether for fun, curiosity, or competition.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-gray-600 rounded-xl p-6 text-white">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <FaUsers className="mr-3" />
                      Join Our Google Classroom
                    </h3>
                    <p className="mb-4 opacity-90">
                      Stay updated with announcements, events, and resources for the 2025-26 school year!
                    </p>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4">
                      <div>
                        <p className="text-sm mb-2">Google Classroom Link:</p>
                        <a 
                          href="https://classroom.google.com/c/NjIzNDMwMDYwNjM3?cjc=qfz72fa" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-200 hover:text-white underline break-all text-sm"
                        >
                          https://classroom.google.com/c/NjIzNDMwMDYwNjM3?cjc=qfz72fa
                        </a>
                      </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <ClassroomCopyCode code="qfz72fa" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "about" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <FaFlask className="mr-3 text-blue-600" />
                  About Us
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Science Society is Earl Haig&apos;s hub for exploring science beyond the classroom. We bring together
                    students interested in biology, chemistry, physics, engineering, and more through hands-on labs,
                    contests, workshops, and collaborations with other clubs.
                  </p>
                  <p>
                    Our activities include everything from building experiments and preparing for competitions to 
                    connecting science with art, music, and cooking. The club is open to all students, whether you 
                    are curious about everyday science or looking to challenge yourself with advanced topics.
                  </p>
                  <p>
                    By joining, members will gain opportunities to learn, experiment, and engage with the scientific 
                    community in a supportive and collaborative environment.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "contests" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <FaTrophy className="mr-3 text-yellow-600" />
                  Science Contests & Competitions
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    If any students in the school want to do any science contests in physics, chemistry, biology, 
                    HOSA, Science Fairs (Toronto Science Fair, Canada Wide Science Fair, ISEF), this is a great 
                    place to be for them.
                  </p>
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-lg font-semibold text-gray-800 mb-2">We are particularly big on Science Fair!</p>
                    <p className="text-gray-700">
                      Join us to get support, resources, and mentorship for your science fair projects. Connect with past winners and mentors to <strong>TURBOCHARGE</strong> your science fair project(s)!
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "curriculum" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <FaBook className="mr-3 text-green-600" />
                  Curriculum Support
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We offer help for many subjects in collaboration with Peer Tutoring.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
