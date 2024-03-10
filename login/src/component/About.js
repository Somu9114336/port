import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Greetings!
          My name is somanatha sahoo, and I am delighted to introduce myself as a recent
          graduate from Khallikote Unitary University, where I completed my post-graduation
          studies. Prior to that, I earned my bachelor's degree from Udayanath College of
          Science and Technology, building a strong foundation in BCA(Bachelor in Computer Application). My academic journey began at Prachi Academy, Adaspur, Cuttack, where I
          completed my schooling. Each educational institution has played a pivotal role in
          shaping my academic and personal growth, fostering in me a deep appreciation for
          learning and a commitment to excellence. I am grateful for the opportunities and
          knowledge I have gained throughout my educational journey and am eager to apply my
          skills and insights as I embark on the next chapter of my career.
        </p>

        <br />

        <p className="text-xl">
          I'm thrilled to
          embark on my journey in the dynamic world of Information Technology (IT).
        </p>
      </div>
    </div>
  );
};

export default About;
