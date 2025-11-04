import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung des AsiaViet Restaurants München',
  robots: {
    index: false,
    follow: false,
  },
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen py-20 md:pt-32">
      <div className="max-w-4xl mx-auto px-6 xl:px-12 2xl:px-16">
        <div className="rounded-3xl border border-white/40 bg-white/40 backdrop-blur-xl shadow-lg p-8 xl:p-10 2xl:p-12">
          <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-amber-900 mb-8">
            Datenschutzerklärung
          </h1>
          
          <div className="prose prose-amber max-w-none text-amber-900/80 space-y-8">
            <section>
              <h2 className="text-2xl xl:text-3xl font-semibold text-amber-900 mb-4">
                1. Verantwortlicher
              </h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <address className="not-italic mt-3">
                <p className="mb-2">
                  <strong>AsiaViet</strong>
                </p>
                <p className="mb-2">
                  Bayerstraße 15<br />
                  80335 München<br />
                  Germany
                </p>
                <p className="mb-2">
                  Telefon: <a href="tel:+4915738848357" className="text-red-600 hover:text-red-700">+49 157 38848357</a>
                </p>
                <p>
                  E-Mail: <a href="mailto:dinhchienv@yahoo.de" className="text-red-600 hover:text-red-700">dinhchienv@yahoo.de</a>
                </p>
              </address>
            </section>

            <section>
              <h2 className="text-2xl xl:text-3xl font-semibold text-amber-900 mb-4">
                2. Datenerfassung auf dieser Website
              </h2>
              
              <h3 className="text-xl xl:text-2xl font-semibold text-amber-900 mt-6 mb-3">
                2.1 Server-Log-Dateien
              </h3>
              <p>
                Beim Besuch unserer Website werden automatisch technische Informationen in sogenannten Server-Log-Dateien 
                gespeichert. Dies umfasst:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name der aufgerufenen Seite</li>
                <li>Übertragene Datenmenge</li>
                <li>Browsertyp und -version</li>
                <li>Betriebssystem</li>
              </ul>
              <p className="mt-4">
                Diese Daten werden ausschließlich zur Gewährleistung der Sicherheit und Stabilität unserer Website sowie 
                zur Fehlerbehebung verwendet. Die Speicherung erfolgt auf Grundlage von Artikel 6 Absatz 1 Satz 1 
                Buchstabe f) DSGVO (berechtigtes Interesse). Die Log-Dateien werden nach 7 Tagen automatisch gelöscht.
              </p>

              <h3 className="text-xl xl:text-2xl font-semibold text-amber-900 mt-6 mb-3">
                2.2 Kontaktaufnahme
              </h3>
              <p>
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, speichern wir die von Ihnen mitgeteilten Daten 
                (Name, E-Mail-Adresse, Telefonnummer, Nachricht) zur Bearbeitung Ihrer Anfrage. Die Verarbeitung 
                erfolgt auf Grundlage von Artikel 6 Absatz 1 Satz 1 Buchstabe f) DSGVO (berechtigtes Interesse) 
                oder Artikel 6 Absatz 1 Satz 1 Buchstabe b) DSGVO (Vertragsanbahnung).
              </p>
              <p className="mt-3">
                Ihre Daten werden gelöscht, sobald sie für die Bearbeitung Ihrer Anfrage nicht mehr erforderlich 
                sind, es sei denn, gesetzliche Aufbewahrungsfristen stehen einer Löschung entgegen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl xl:text-3xl font-semibold text-amber-900 mb-4">
                3. Google Analytics
              </h2>
              <p>
                Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited (Gordon House, 
                Barrow Street, Dublin 4, Irland; &ldquo;Google&rdquo;). Google Analytics verwendet Cookies, die auf Ihrem Endgerät 
                gespeichert werden und die eine Analyse der Nutzung der Website ermöglichen.
              </p>
              <p className="mt-3">
                Die durch die Cookies erzeugten Informationen über Ihre Nutzung dieser Website werden in der Regel an 
                einen Server von Google in den USA übertragen und dort gespeichert. Ihre IP-Adresse wird von Google 
                jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des 
                Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle 
                IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.
              </p>
              <p className="mt-3">
                Im Auftrag des Betreibers dieser Website wird Google diese Informationen nutzen, um Ihre Nutzung der 
                Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der 
                Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Die im Rahmen von 
                Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google 
                zusammengeführt.
              </p>
              <p className="mt-3">
                Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software 
                verhindern. Sie können darüber hinaus die Erfassung der durch die Cookies erzeugten und auf Ihre 
                Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser 
                Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin 
                herunterladen und installieren:{' '}
                <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">
                  https://tools.google.com/dlpage/gaoptout?hl=de
                </a>
              </p>
              <p className="mt-3">
                Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage von Artikel 6 Absatz 1 Satz 1 
                Buchstabe a) DSGVO (Einwilligung), sofern Sie der Nutzung von Google Analytics zugestimmt haben.
              </p>
            </section>

            <section>
              <h2 className="text-2xl xl:text-3xl font-semibold text-amber-900 mb-4">
                4. Cookies
              </h2>
              <p>
                Diese Website verwendet Cookies. Einige Cookies sind technisch notwendig und werden automatisch gesetzt. 
                Andere Cookies (wie z.B. von Google Analytics) werden nur mit Ihrer Einwilligung gesetzt. Sie können 
                Ihre Browser-Einstellungen so anpassen, dass Sie über das Setzen von Cookies informiert werden und 
                einzeln über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle oder generell 
                ausschließen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl xl:text-3xl font-semibold text-amber-900 mb-4">
                5. Hosting
              </h2>
              <p>
                Diese Website wird auf Servern eines Hosting-Anbieters gehostet. Der Hosting-Anbieter kann dabei auf 
                die oben genannten Server-Log-Dateien zugreifen. Dies erfolgt auf Grundlage unserer berechtigten 
                Interessen an einer zuverlässigen und sicheren Bereitstellung unserer Website (Artikel 6 Absatz 1 
                Satz 1 Buchstabe f) DSGVO).
              </p>
            </section>

            <section>
              <h2 className="text-2xl xl:text-3xl font-semibold text-amber-900 mb-4">
                6. Ihre Rechte
              </h2>
              <p>
                Sie haben jederzeit das Recht:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
                <li>Einschränkung der Datenverarbeitung zu verlangen (Art. 18 DSGVO)</li>
                <li>Ihre Daten in einem strukturierten Format zu erhalten (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen die Datenverarbeitung einzulegen (Art. 21 DSGVO)</li>
              </ul>
              <p className="mt-4">
                Zur Ausübung Ihrer Rechte können Sie sich jederzeit an uns wenden. Sie haben zudem das Recht, sich 
                bei einer Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer 
                personenbezogenen Daten nicht rechtmäßig erfolgt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl xl:text-3xl font-semibold text-amber-900 mb-4">
                7. Änderungen dieser Datenschutzerklärung
              </h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen 
                Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-amber-200/50">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors font-medium"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
