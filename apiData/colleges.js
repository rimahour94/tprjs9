const collegeList = require("./index.json");

// get college details

const getCollege = (arr, cllgName) => {
  const collegDetails = arr.filter((collegeobj) => {
    return collegeobj.collegeName === cllgName;
  });

  return collegDetails;
};

const displayCollegeDetails = (arr, clgName) => {
  const collegeData = getCollege(arr, clgName);
  console.log(collegeData);
};

displayCollegeDetails(collegeList, "");
