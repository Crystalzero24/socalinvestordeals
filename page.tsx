'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const listings = [/* truncated for brevity - use latest full canvas version here */];

export default function InvestorDeals() {
  const [search, setSearch] = useState("");

  const filtered = listings.filter(l =>
    l.address.toLowerCase().includes(search.toLowerCase()) ||
    l.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 grid gap-4">
      <h1 className="text-2xl font-bold">SoCal Investor Deals</h1>
      <Input
        placeholder="Search by city or address"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full max-w-md"
      />
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map(listing => (
          <Card key={listing.id} className="shadow-xl">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">{listing.address}, {listing.city}</h2>
              <p className="text-sm">Price: ${listing.price.toLocaleString()} | Sqft: {listing.sqft}</p>
              <p>ARV: ${listing.arv.toLocaleString()}</p>
              <p>Flip Profit: ${listing.flipProfit.toLocaleString()}</p>
              <p>Cap Rate: {listing.capRate.toFixed(2)}%</p>
              <div className="mt-2">
                <h3 className="font-semibold">Top Comparables:</h3>
                <ul className="list-disc pl-5">
                  {listing.comps.map((comp, i) => (
                    <li key={i}>{comp.address} - ${comp.price.toLocaleString()} ({comp.sqft} sqft)</li>
                  ))}
                </ul>
              </div>
              <Button className="mt-4 w-full">Request Deal Sheet</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
