package org.branchgabriel.domain;

import org.neo4j.graphdb.Direction;
import org.springframework.data.neo4j.annotation.GraphId;
import org.springframework.data.neo4j.annotation.NodeEntity;
import org.springframework.data.neo4j.annotation.RelatedTo;

import java.util.Set;

@NodeEntity
public class Course {
    @GraphId Long id;
    String name;
    @RelatedTo(type="PLAYED_AT", direction = Direction.INCOMING)
    Set<Player> players;
