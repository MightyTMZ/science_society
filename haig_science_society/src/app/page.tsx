import React from "react";
import ClassroomCopyCode from "@/components/ClassroomCopyCode/ClassroomCopyCode";
import { FaFlask, FaGraduationCap, FaUsers, FaTrophy } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6 font-bebas-neue">
            COMING SOON
          </h1>
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-2xl font-semibold mb-8">
            2025-26
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-8 font-bebas-neue">
            Earl Haig Science Society
          </h2>
           <div className="relative group">
             <img 
               src="/logo.png" 
               alt="Science Society logo" 
               className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl group-hover:shadow-blue-500/50 border-4 border-white shadow-lg"
             />
             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
             <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:animate-bounce"></div>
             <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out group-hover:animate-pulse"></div>
           </div>
        </div>

        <div className="my-6 mx-3 inline-block group relative">
          <Link
            href="https://20242025-earlhaigsciencesociety.vercel.app/"
            className="relative text-blue-400 font-semibold transition duration-300
                      group-hover:text-blue-300"
          >
            2024-2025 website
          </Link>
        </div>
        
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* About Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <FaFlask className="mr-4 text-blue-600" />
              About Us
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Science Society is Earl Haig&apos;s hub for exploring science beyond the classroom. We bring together
              students interested in biology, chemistry, physics, engineering, and more through hands-on labs,
              contests, workshops, and collaborations with other clubs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our activities include everything from building experiments and preparing for competitions to 
              connecting science with art, music, and cooking. The club is open to all students, whether you 
              are curious about everyday science or looking to challenge yourself with advanced topics. By 
              joining, members will gain opportunities to learn, experiment, and engage with the scientific 
              community in a supportive and collaborative environment.
            </p>
          </div>  

          {/* Contests Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <FaTrophy className="mr-4 text-yellow-600" />
              Science Contests & Competitions
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
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

          {/* Join Us Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <FaGraduationCap className="mr-4 text-green-600" />
              Who Can Join?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Science Society is open to all Earl Haig students, regardless of grade or science background. 
              We welcome anyone who is curious about science — no prior experience or applications are required.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our goal is to create a supportive, inclusive space where students can explore science at their 
              own pace, whether for fun, curiosity, or competition. We will actively listen to members and 
              do our best to curate our activities based on their feedback.
            </p>
          </div>

          {/* Google Classroom Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-6 flex items-center">
              <FaUsers className="mr-4" />
              Join Our Google Classroom
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Stay updated with announcements, events, and resources for the 2025-26 school year!
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <p className="text-lg mb-2">Google Classroom Link:</p>
                  <a 
                    href="https://classroom.google.com/c/NjIzNDMwMDYwNjM3?cjc=qfz72fa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-white underline break-all"
                  >
                    https://classroom.google.com/c/NjIzNDMwMDYwNjM3?cjc=qfz72fa
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <ClassroomCopyCode code="qfz72fa" />
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 font-semibold">
            Stay tuned for exciting updates and events for the 2025-26 school year!
          </p>
          <p className="text-lg text-gray-500 mt-2">
            Join our Google Classroom to be the first to know when activities begin.
          </p>
        </div>
      </div>
    </div>
  );
}
