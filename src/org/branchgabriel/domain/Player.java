package org.branchgabriel.domain;

import org.springframework.data.neo4j.annotation.GraphId;
import org.springframework.data.neo4j.annotation.NodeEntity;
import org.springframework.data.neo4j.annotation.RelatedToVia;

@NodeEntity
public class Player {
    @GraphId Long id;
    String name;
    boolean hasDog;
    @RelatedToVia(type = "COURSE")
    Iterable<Course> courses;
}
