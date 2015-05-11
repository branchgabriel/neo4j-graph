package org.branchgabriel.repos;

import org.branchgabriel.domain.Course;
import org.springframework.data.neo4j.repository.GraphRepository;

public interface CoursesRepository extends GraphRepository<Course> {
}
