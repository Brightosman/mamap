import CategoryList from '@/components/frontend/CategoryList'
import CommunityTrainings from '@/components/frontend/CommunityTrainings';
import Hero from '@/components/frontend/Hero'
import MarketList from '@/components/frontend/MarketList'
import { getData } from '@/lib/getData';
import Link from 'next/link'

export default async function Home() {
  const categories = await getData("categories");
  return (
    <div className="min-h-screen">
      <Hero />
      <MarketList />

      {categories.map((category, i) => {
        return (
          <div className="py-8" key={i}>
            <CategoryList category={category} />
          </div>
        );
      })}

      <CommunityTrainings />

      <h2 className="text-4xl"> Welcome to  BABA9JA</h2>
      <Link className="my-4 underline" href="/register-farmer">Join us as a Farmer / Supplier / Vendor </Link>
    </div>
  )
}
