import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/auth/users`).then((res) => {
      setUsers(res.data);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const makeMod = async (email) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/makemod`,
        {
          email: email,
        }
      );
      console.log(response.data);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  const makeTeam = async (email) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/maketeam`,
        {
          email: email,
        }
      );
      console.log(response.data);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  const makeUser = async (email) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/makeuser`,
        {
          email: email,
        }
      );
      console.log(response.data);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-6">
      <Head>
        <title>SpeakerOre Admin</title>
      </Head>

      <div className="z-50 select-none duration-1000 md:duration-[0s]">
        <h1 className="hidden">SpeakerOre</h1>
        <h1 className="z-50 pt-1 text-4xl font-extrabold cursor-pointer items-center">
          <center>
            <Image
              src="/speakerore.png"
              alt="SpeakerOre"
              width={200}
              height={120}
              priority={true}
            />
          </center>
        </h1>
        <h1 className="text-3xl font-bold mt-6">All Users</h1>
      </div>
      <div className="my-6">
        {users &&
          users?.map((item, index) => {
            return (
              <div
                className="p-6 my-2 flex justify-between bg-gray-800 px-4 rounded-md"
                key={index}
              >
                <div>
                  <h3>Name: {item?.name}</h3>
                  <h3>Email: {item?.email}</h3>
                  <h3>Role: {item?.role}</h3>
                  &nbsp;
                </div>
                <div>
                  <div className="flex justify-center">
                    <div className="flex justify-center">
                      <button
                        className="bg-orange-500 cursor-pointer hover:bg-orange-700 text-white font-bold py-1 px-3 rounded-md ml-4"
                        onClick={() => {
                          makeMod(item?.email);
                        }}
                      >
                        Make MOD
                      </button>
                      <button
                        className="bg-orange-500 cursor-pointer hover:bg-orange-700 text-white font-bold py-1 px-3 rounded-md ml-4"
                        onClick={() => {
                          makeTeam(item?.email);
                        }}
                      >
                        Make Team
                      </button>
                      <button
                        className="bg-orange-500 cursor-pointer hover:bg-orange-700 text-white font-bold py-1 px-3 rounded-md ml-4"
                        onClick={() => {
                          makeUser(item?.email);
                        }}
                      >
                        Make User
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
