'use client';
import React, { useState } from 'react';
import ProjectCard from '@/component/card';
import { useFetchCards } from '@/hooks';
import { Message } from '@/component/wrapper';
import { Pagination } from '@/component/pagination/indext';
import {Project} from "@/types";



const ProjectsGrid: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useFetchCards({ setProjects, setError, setLoading, page });

  const handlePageChange = (newPage: number): void => {
    if (newPage >= 1) {
      setPage(newPage);
    }
  };

  if (loading) return <Message text="Loading..." />;
  if (error) return <Message text={`Помилка: ${error}`} />;
  if (projects.length === 0) return <Message text="Немає проєктів" />;

  return (
      <div className="bg-gray-500 px-2 py-4">
        <div
            className="w-full mx-auto grid gap-6 justify-evenly grid-cols-[repeat(1,auto)] sm:grid-cols-[repeat(2,auto)]
             md:grid-cols-[repeat(3,auto)]"
        >
          {projects.map(({ _id, generalInfo, images }) => (
              <ProjectCard key={_id} images={images} generalInfo={generalInfo} />
          ))}
        </div>

        <Pagination page={page} handlePageChange={handlePageChange} />
      </div>
  );
};

export default ProjectsGrid;
