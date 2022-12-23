// This file is generated using scripts/generate-icon-components/utils.js
// Don't edit it manually
import { storiesOf } from '@storybook/react'
import React from 'react'
import { IconArrowSmDown } from './components/IconArrowSmDown'
import { IconArrowSmUp } from './components/IconArrowSmUp'
import { IconBell } from './components/IconBell'
import { IconBookOpen } from './components/IconBookOpen'
import { IconCheckCircleSolid } from './components/IconCheckCircleSolid'
import { IconCloseCircleSolid } from './components/IconCloseCircleSolid'
import { IconClose } from './components/IconClose'
import { IconExlamationCirleSolid } from './components/IconExlamationCirleSolid'
import { IconFacebook } from './components/IconFacebook'
import { IconGithub } from './components/IconGithub'
import { IconHome } from './components/IconHome'
import { IconInformationCircleSolid } from './components/IconInformationCircleSolid'
import { IconLinkSolid } from './components/IconLinkSolid'
import { IconLinkedin } from './components/IconLinkedin'
import { IconLogout } from './components/IconLogout'
import { IconPaperClip } from './components/IconPaperClip'
import { IconPencilAlt } from './components/IconPencilAlt'
import { IconPencilSolid } from './components/IconPencilSolid'
import { IconSpinner } from './components/IconSpinner'
import { IconSwitchVertical } from './components/IconSwitchVertical'
import { IconTable } from './components/IconTable'
import { IconTwitter } from './components/IconTwitter'
import { IconYoutube } from './components/IconYoutube'

const icons: [React.FC<React.SVGProps<SVGSVGElement>>, string][] = [
  [IconArrowSmDown, 'IconArrowSmDown'],
  [IconArrowSmUp, 'IconArrowSmUp'],
  [IconBell, 'IconBell'],
  [IconBookOpen, 'IconBookOpen'],
  [IconCheckCircleSolid, 'IconCheckCircleSolid'],
  [IconCloseCircleSolid, 'IconCloseCircleSolid'],
  [IconClose, 'IconClose'],
  [IconExlamationCirleSolid, 'IconExlamationCirleSolid'],
  [IconFacebook, 'IconFacebook'],
  [IconGithub, 'IconGithub'],
  [IconHome, 'IconHome'],
  [IconInformationCircleSolid, 'IconInformationCircleSolid'],
  [IconLinkSolid, 'IconLinkSolid'],
  [IconLinkedin, 'IconLinkedin'],
  [IconLogout, 'IconLogout'],
  [IconPaperClip, 'IconPaperClip'],
  [IconPencilAlt, 'IconPencilAlt'],
  [IconPencilSolid, 'IconPencilSolid'],
  [IconSpinner, 'IconSpinner'],
  [IconSwitchVertical, 'IconSwitchVertical'],
  [IconTable, 'IconTable'],
  [IconTwitter, 'IconTwitter'],
  [IconYoutube, 'IconYoutube'],
]

storiesOf('components/icons', module).add('all icons', () => (
  <div className="flex flex-wrap">
    {icons.map(([Icon, displayName], index) => (
      <div
        key={index}
        className="w-1/6 flex items-center flex-col border-gray-100 border py-4"
      >
        <Icon className="w-5 h-5" />
        <code className="bg-gray-100 text-sm px-2 py-1 mt-3 inline-block rounded">
          {displayName}
        </code>
      </div>
    ))}
  </div>
))
