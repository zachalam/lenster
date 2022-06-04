import ExploreFeed from '@components/Explore/Feed'
import { GridItemEight, GridItemFour, GridLayout } from '@components/GridLayout'
import Footer from '@components/Shared/Footer'
import AppContext from '@components/utils/AppContext'
import SEO from '@components/utils/SEO'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import React, { useContext } from 'react'

import HomeFeed from './Feed'
import Hero from './Hero'
import RecommendedProfiles from './RecommendedProfiles'

const Announcement = dynamic(() => import('./Announcement'))
const Streak = dynamic(() => import('./Streak'))
const SetProfile = dynamic(() => import('./SetProfile'))
const SetDefaultProfile = dynamic(() => import('./SetDefaultProfile'))

const Home: NextPage = () => {
  const { currentUser } = useContext(AppContext)

  return (
    <>
      <SEO />
      {!currentUser && <Hero />}
      <GridLayout>
        <GridItemEight className="space-y-5">
          {currentUser ? <HomeFeed /> : <ExploreFeed />}
        </GridItemEight>
        <GridItemFour>
          <Announcement />
          {currentUser && (
            <>
              <SetDefaultProfile />
              <SetProfile />
              <Streak />
            </>
          )}
          <RecommendedProfiles />
          <Footer />
        </GridItemFour>
      </GridLayout>
    </>
  )
}

export default Home
