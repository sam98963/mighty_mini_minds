import JournalEntry from "../components/JournalEntry";
import { useGet } from "../hooks/useGet";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Journal() {
const {data: entries, isLoading, isError, error} = useGet();


    return (
        <div className=" h-full w-full overflow-y-scroll bg-red ">
            <div>{isLoading? `loading...` : isError? JSON.stringify(error) : JSON.stringify(entries)}</div>
            <h1 className="font-bold text-2xl sm:text-4xl text-center mt-4">Check out your past journals</h1>
            <div className="flex justify-end items-center mt-4">
            <label className="font-bold sm:text-base">Search by</label>
              <select className="bg-skin-input text-xs sm:text-base mx-4 p-2 rounded-lg shadow-md outline-none">
                <option value="All">All</option>
                <option value="7Days">Last 7 Days</option>
                <option value="LastMonth">Last Month</option>
              </select>
              </div>
            <JournalEntry date="2021-10-01" res1="I enjoyed the weather today" res2="I found it challenging to get out of bed" res3="I was surprised by how much I got done today" />
            <JournalEntry date="2021-10-02" res1="I enjoyed the weather today" res2="I found it challenging to get out of bed" res3="I was surprised by how much I got done today" />
            <JournalEntry date="2021-10-03" res1="I enjoyed the weather today" res2="I found it challenging to get out of bed" res3="I was surprised by how much I got done today" />
            <JournalEntry date="2021-10-04" res1="I enjoyed the weather today" res2="I found it challenging to get out of bed" res3="I was surprised by how much I got done today" />
        </div>
    );
}