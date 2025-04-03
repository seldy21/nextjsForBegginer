import { fetchCardData, fetchLatestInvoices, fetchRevenue } from "../lib/data";
import { Card } from "../ui/dashboard/cards";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import RevenueChart from "../ui/dashboard/revenue-chart";
import { lusitana } from "../ui/fonts";

export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          title="Collected"
          value={totalPaidInvoices}
          type={"collected"}
        ></Card>
        <Card
          title="Pending"
          value={totalPendingInvoices}
          type={"pending"}
        ></Card>
        <Card
          title="Total Invoices"
          value={numberOfInvoices}
          type={"invoices"}
        ></Card>
        <Card
          title="Total customers"
          value={numberOfCustomers}
          type={"customers"}
        ></Card>
      </div>
      <div className="mt-2 grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-6">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
