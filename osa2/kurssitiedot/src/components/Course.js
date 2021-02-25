import React from 'react';
import CourseHeader from './CourseHeader';
import Content from './Content';

const Course = ({ course }) => {
  return (
    <div>
      <CourseHeader course={course} />
      <Content course={course} />
    </div>
  );
}

export default Course;