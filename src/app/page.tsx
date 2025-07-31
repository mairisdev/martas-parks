import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Sveicināti Martas Parks!
        </h1>
<Dialog>
      <DialogTrigger asChild>
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
          Dzēst kontu
        </button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Vai tu esi pilnīgi pārliecināts?</DialogTitle>
          <DialogDescription>
            Šo darbību nevar atsaukt. Tas neatgriezeniski izdzēsīs tavu kontu un 
            noņems visus tavus datus no mūsu serveriem.
          </DialogDescription>
        </DialogHeader>
        
        <DialogFooter>
          <DialogTrigger asChild>
            <button className="px-6 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 
                             text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 
                             transition-all duration-200 font-medium">
              Atcelt
            </button>
          </DialogTrigger>
          
          <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-red-600 
                           text-white hover:from-red-600 hover:to-red-700 
                           shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95
                           transition-all duration-200 font-medium">
            Dzēst kontu
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
      </div>
    </main>
  );
}