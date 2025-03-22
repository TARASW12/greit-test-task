import React, { useEffect } from 'react';
import { fetcher } from '@/api';
import { Project } from '@/types';

interface UseFetchCardsProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  page: number;
}

export const useFetchCards = ({
  setLoading,
  setError,
  setProjects,
  page,
}: UseFetchCardsProps): void => {
  useEffect(() => {
    const fetchProjects = async (pageNum: number): Promise<void> => {
      setLoading(true);
      setError('');
      try {
        const response = await fetcher({ pageNum });

        if (!response.ok) {
          throw new Error(`Помилка сервера: ${response.status}`);
        }

        const data = await response.json();
        const projectsArray = Array.isArray(data) ? data : data.projects || [];
        setProjects(projectsArray);
      } catch (err) {
        console.error(err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Невідома помилка');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProjects(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
};
