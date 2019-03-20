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
import React from 'react'
import { connect } from 'react-redux'
import semver from 'semver'
import { getVersion } from 'shared/modules/dbMeta/dbMetaDuck'
import DocumentItems from './DocumentItems'
import { Drawer, DrawerBody, DrawerHeader } from 'browser-components/drawer'

export const formatDocVersion = v => {
  if (!semver.valid(v)) {
    return 'current'
  }
  if (semver.prerelease(v)) {
    return `${semver.major(v)}.${semver.minor(v)}-preview`
  }
  return `${semver.major(v)}.${semver.minor(v)}` || 'current'
}

const intro = [
  { name: 'Getting started', command: ':play intro', type: 'play' },
  { name: 'Basic graph concepts', command: ':play concepts', type: 'play' },
  { name: 'Writing Cypher queries', command: ':play cypher', type: 'play' }
]
const help = [
  { name: 'Help', command: ':help help', type: 'help' },
  { name: 'Cypher syntax', command: ':help cypher', type: 'help' },
  { name: 'Available commands', command: ':help commands', type: 'help' },
  { name: 'Keyboard shortcuts', command: ':help keys', type: 'help' }
]

const getReferences = (version, v) => {
  const oldRefs = [
    {
      name: 'Getting Started',
      command: `https://docs.bigconnect.io`,
      type: 'link'
    }
  ]
  return [].concat(oldRefs)
}

const getStaticItems = (version, urlVersion) => {
  return {
    help,
    intro,
    reference: getReferences(version, urlVersion)
  }
}

const Documents = ({ version, urlVersion }) => {
  const items = getStaticItems(version, urlVersion)
  return (
    <Drawer id='db-documents'>
      <DrawerHeader>Documents</DrawerHeader>
      <DrawerBody>
        <DocumentItems header={'Introduction'} items={items.intro} />
        <DocumentItems header={'Help'} items={items.help} />
        <DocumentItems header={'Useful Resources'} items={items.reference} />
      </DrawerBody>
    </Drawer>
  )
}

const mapStateToProps = state => {
  const version = getVersion(state)
  return {
    version,
    urlVersion: formatDocVersion(version)
  }
}

export default connect(mapStateToProps)(Documents)
