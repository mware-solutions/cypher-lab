/*
 * Copyright (c) 2002-2019 "Neo4j,"
 * Neo4j Sweden AB [http://neo4j.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

export const scripts = [
  {
    folder: 'basics',
    content: '// Get some data\nMATCH (n1)-[r]->(n2) RETURN r, n1, n2 LIMIT 25'
  },
  {
    folder: 'profile',
    content: '// Count all nodes\nMATCH (n)\nRETURN count(n)'
  },
  {
    folder: 'profile',
    content: '// Count all relationships\nMATCH ()-->() RETURN count(*);'
  },
  {
    folder: 'profile',
    content:
      '// What kind of nodes exist\n// Sample some nodes, reporting on property and relationship counts per node.\nMATCH (n) WHERE rand() <= 0.1\nRETURN\nDISTINCT labels(n),\ncount(*) AS SampleSize,\navg(size(keys(n))) as Avg_PropertyCount,\nmin(size(keys(n))) as Min_PropertyCount,\nmax(size(keys(n))) as Max_PropertyCount,\navg(size( (n)-[]-() ) ) as Avg_RelationshipCount,\nmin(size( (n)-[]-() ) ) as Min_RelationshipCount,\nmax(size( (n)-[]-() ) ) as Max_RelationshipCount'
  },
  {
    folder: 'profile',
    content: '// List node labels\nCALL db.labels()'
  },
  {
    folder: 'profile',
    content: '// List relationship types\nCALL db.relationshipTypes()'
  },
  {
    folder: 'graphs',
    content: '// Movie Graph\n:play movie-graph'
  },
  {
    folder: 'graphs',
    content: '// Northwind Graph\n:play northwind-graph'
  },
  {
    folder: 'procedures',
    content: '// List procedures\nCALL dbms.procedures()'
  },
  {
    folder: 'procedures',
    content: '// List functions\nCALL dbms.functions()'
  }
]

export const folders = [
  {
    id: 'basics',
    name: 'Basic Queries',
    isStatic: true
  },
  {
    id: 'graphs',
    name: 'Example Graphs',
    isStatic: true
  },
  {
    id: 'profile',
    name: 'Data Profiling',
    isStatic: true
  },
  {
    id: 'procedures',
    name: 'Common Procedures',
    isStatic: true
  }
]
