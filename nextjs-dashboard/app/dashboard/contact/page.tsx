import { lusitana } from '@/app/ui/fonts';

export default function ContactPage() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Contacts
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl bg-gray-50 p-6 shadow-sm flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">Phone</h3>
          <p className="text-gray-700">041 010 414</p>
        </div>
        <div className="rounded-xl bg-gray-50 p-6 shadow-sm flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="text-gray-700">
            <a
              href="mailto:support@example.com"
              className="text-blue-600 underline"
            >
              aljazko-rosko@gemail.com
            </a>
          </p>
        </div>
        <div className="rounded-xl bg-gray-50 p-6 shadow-sm flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p className="text-gray-700 text-center">
            Trg mladosti 45
            <br />
            Velenje, 3320
            <br />
            Slovenia
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-sm col-span-2 lg:col-span-3 bcg-gray-50">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Trg+mladosti+45,+Velenje,+Slovenia&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>
    </main>
  );
}

