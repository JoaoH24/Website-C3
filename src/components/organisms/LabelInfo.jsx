import Heading from "../atoms/Heading";

const LabelInfo = ({ title, dataList = [] }) => {
  return (
    <div className="flex min-h-40 m-20">
      <div className="left-0 top-0 w-1 min-h-40 bg-gradient-to-b from-main to-complement rounded-l-2xl" />

      <div className="flex flex-col py-2 px-10">
        <Heading
          children={title}
          size={2}
          level={3}
          type={"gradient"}
        ></Heading>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
          {dataList.map((item, index) => (
            <li className="font-normal font-ps  text-white text-lg" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LabelInfo;
