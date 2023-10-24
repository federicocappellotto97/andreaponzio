import pages from './docs/pages'
import projects from './docs/projects'

import atoms from './components/atoms'
import molecules from './components/molecules'
import organisms from './components/organisms'
import settings from './docs/settings'
import menu from './docs/menu'

const docTypes = [pages, projects, settings, menu]
export const schemaTypes = [...atoms, ...molecules, ...organisms, ...docTypes]
