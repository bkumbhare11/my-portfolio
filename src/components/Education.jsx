import React from "react";

function Education() {
  return (
    <>
      <section className="mt-20 md:mt-28">
        <h2 className="text-5xl md:text-6xl font-bold ">Education</h2>

        <div className="my-8">
          <div className="flex flex-col gap-4">
            <div className="border border-slate-200 p-5 rounded-2xl flex flex-col gap-2 bg-white shadow-sm hover:border-blue-300 transition-colors">
              <h3 className="font-bold text-slate-900 text-lg">
                Post Graduate Diploma in Computer Application (PGDCA)
              </h3>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <p className="text-slate-700 font-medium">
                  Pt. Ravishankar Shukla University
                </p>
                <span className="text-sm font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full w-fit">
                  2022 - 2023
                </span>
              </div>
            </div>

            <div className="border border-slate-200 p-5 rounded-2xl flex flex-col gap-2 bg-white shadow-sm hover:border-blue-300 transition-colors">
              <h3 className="font-bold text-slate-900 text-lg">
                Bachlelor Of Commerce (B.COM)
              </h3>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <p className="text-slate-700 font-medium">
                  Pt. Ravishankar Shukla University
                </p>
                <span className="text-sm font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full w-fit">
                  2018 - 2021
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
