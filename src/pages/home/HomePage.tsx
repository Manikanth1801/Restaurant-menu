import PageLayout from "@/components/pageLayout/PageLayout"
import HomeContainer from "@/container/homeContainer/HomeContainer"
import { FC } from "react"

const HomePage:FC = () => {
  return (
    <>
    <PageLayout>
      <HomeContainer />
    </PageLayout>
    </>
  )
}

export default HomePage