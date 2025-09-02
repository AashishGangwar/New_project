import React from 'react';
import { useParams } from 'react-router-dom';

const SubjectPage = () => {
  const { grade, subject } = useParams();
  
  // Format the grade for display (e.g., "1st" -> "1st Grade")
  const formatGrade = (gradeStr) => {
    if (!gradeStr) return '';
    const parts = gradeStr.split('-');
    return parts[0] + (parts[1] ? ` ${parts[1]}` : '');
  };

  // Format the subject for display (e.g., "social-studies" -> "Social Studies")
  const formatSubject = (subjectStr) => {
    if (!subjectStr) return '';
    return subjectStr
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-3xl font-bold mb-6">
        {grade ? `${formatGrade(grade)} Grade` : 'Subject'} 
        {subject && `- ${formatSubject(subject)}`}
      </h1>
      <div className="bg-white/10 p-6 rounded-lg">
        <p className="text-lg mb-4">
          This is the {grade ? `${formatGrade(grade)} Grade` : 'subject'} page
          {subject ? ` for ${formatSubject(subject)}.` : '.'}
        </p>
        <p className="text-gray-300">
          Content for this page will be displayed here.
        </p>
      </div>
    </div>
  );
};

export default SubjectPage;
