import React from 'react';
import { Hyperlink } from '@edx/paragon';

export const subjects = [
  { name: 'Architecture', id: 1000 },
  { name: 'Art & Culture', id: 1000 },
  { name: 'Biology & Life Sciences', id: 1000 },
  { name: 'Business & Management', id: 1000 },
  { name: 'Chemistry', id: 1000 },
  { name: 'Communication', id: 1000 },
  { name: 'Computer Science', id: 1000 },
  { name: 'Data Analysis & Statistics', id: 1000 },
  { name: 'Design', id: 1000 },
  { name: 'Economics & Finance', id: 1000 },
  { name: 'Education & Teacher Training', id: 1000 },
  { name: 'Electronics', id: 1000 },
  { name: 'Energy & Earth Sciences', id: 1000 },
  { name: 'Engineering', id: 1000 },
  { name: 'Environmental Studies', id: 1000 },
  { name: 'Ethics', id: 1000 },
  { name: 'Food & Nutrition', id: 1000 },
  { name: 'Health & Safety', id: 1000 },
  { name: 'History', id: 1000 },
  { name: 'Humanities', id: 1000 },
  { name: 'Language', id: 1000 },
  { name: 'Law', id: 1000 },
  { name: 'Literature', id: 1000 },
  { name: 'Math', id: 1000 },
  { name: 'Medicine', id: 1000 },
  { name: 'Music', id: 1000 },
  { name: 'Philanthropy', id: 1000 },
  { name: 'Philosophy & Ethics', id: 1000 },
  { name: 'Physics', id: 1000 },
  { name: 'Science', id: 1000 },
  { name: 'Social Sciences', id: 1000 },
];



const MENU_ITEMS = [
  {
    content: 'Courses',
    name: 'courses',
    destination: '#',
    submenu: (
      <div className="main-menu-courses">
        <div className="d-sm-flex align-items center">
          <h2 className="mt-2 mb-4 flex-grow-1">Courses by subject</h2>
          <div><a href="/" className="btn btn-primary">All Subjects</a></div>
        </div>
        <ul className="list-unstyled mb-0">
          <li className="nav-item"><Hyperlink content="Architecture" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Art & Culture" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Biology & Life Sciences" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Business & Management" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Chemistry" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Communication" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Computer Science" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Data Analysis & Statistics" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Design" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Economics & Finance" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Education & Teacher Training" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Electronics" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Energy & Earth Sciences" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Engineering" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Environmental Studies" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Ethics" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Food & Nutrition" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Health & Safety" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="History" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Humanities" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Language" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Law" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Literature" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Math" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Medicine" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Music" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Philanthropy" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Philosophy & Ethics" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Physics" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Science" destination="#" /></li>
          <li className="nav-item"><Hyperlink content="Social Sciences" destination="#" /></li>


        </ul>
      </div>
    ),
  },
  {
    content: 'Programs & degrees',
    name: 'programs',
    destination: '#',
    submenu: (
      <div>
        <h2 className="mt-2 mb-4">Pathways for your advancement</h2>
        <dl className="mb-0">
          <dt><Hyperlink content="MicroMasters Program" destination="#" /></dt>
          <dd>Graduate-level, for career advancement or a degree path</dd>

          <dt><Hyperlink content="Professional Certificate" destination="#" /></dt>
          <dd>From employers or universities to build today&lquo;s in-demand skills</dd>

          <dt><Hyperlink content="Online Master's Degree" destination="#" /></dt>
          <dd>Top-ranked programs, affordable, and fully online</dd>

          <dt><Hyperlink content="Global Freshman Academy" destination="#" /></dt>
          <dd>Freshman year courses for university credit from ASU</dd>

          <dt><Hyperlink content="XSeries" destination="#" /></dt>
          <dd className="mb-0">Series of courses for a deep understanding of a topic</dd>
        </dl>
      </div>
    ),
  },
  {
    content: 'Schools & partners',
    name: 'schools',
    destination: '#',
  },
  {
    content: 'edX for Business',
    name: 'enterprise',
    destination: '#',
  },
];

export default MENU_ITEMS;
