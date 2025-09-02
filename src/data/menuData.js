export const menuData = [
  { 
    label: "Browse by Standard", 
    type: "link",
    href: "/browse/standards"
  },
  {
    label: "Elementary",
    type: "expand",
    children: [
      {
        label: "Kindergarten",
        children: ["Math", "Science", "Social Studies", "Foreign Languages", "Reading & Writing"]
      },
      { label: "1st grade", children: ["Math", "Science", "English"] },
      { label: "2nd grade", children: ["Math", "Science"] },
      { label: "3rd grade" },
      { label: "4th grade" },
      { label: "5th grade" },
    ]
  },
  {
    label: "Middle School",
    type: "expand",
    children: [
      { label: "6th grade", children: ["Math", "Science"] },
      { label: "7th grade" },
      { label: "8th grade" },
    ]
  },
  {
    label: "High School",
    type: "expand",
    children: [
      { label: "9th grade" },
      { label: "10th grade" },
      { label: "11th grade" },
      { label: "12th grade" },
    ]
  }
];
