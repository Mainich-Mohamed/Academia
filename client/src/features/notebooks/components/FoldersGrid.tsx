import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusIcon } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Folder {
  id: string
  name: string
  createdAt: Date
  notebooksCount: number
}

function FoldersGrid() {
  const [folders, setFolders] = useState<Folder[]>(() => {
    const saved = localStorage.getItem('folders');
    return saved ? JSON.parse(saved) : [];
  })
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [newFolderName, setNewFolderName] = useState<string>('');
  const [maxColsPerRow, setMaxColsPerRow] = useState<number>(1); 

  // Calculate max columns based on screen size when component mounts and on window resize
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const screenWidth = window.innerWidth;

        if (screenWidth < 768) { // Mobile
          setMaxColsPerRow(2);
        } else if (screenWidth < 1024) { // Tablet
          setMaxColsPerRow(3);
        } else { // Desktop
          setMaxColsPerRow(4);
        }
      }
    };
    // Set initial value
    handleResize();
    window.addEventListener('resize', handleResize);
    // remove event listener when component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const addFolder = () => {
    if (newFolderName.trim()) {
      const newFolder: Folder = {
        id: Date.now().toString(),
        name: newFolderName.trim(),
        createdAt: new Date(),
        notebooksCount: 0,
      }
      const updatedFolders = [...folders, newFolder];
      setFolders(updatedFolders);
      localStorage.setItem('folders', JSON.stringify(updatedFolders));
      setNewFolderName('');
      setIsDialogOpen(false);
    }
  }

  // Dynamic columns: 1 for add button + number of folders
  const totalItems = folders.length + 1;
  const columns = Math.min(totalItems, maxColsPerRow);

  return (
    <div className='mt-15'>
      <div 
        className="grid gap-6 justify-items-center"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(14rem, 1fr))`,
          gridAutoFlow: 'row'
        }}>
          
        {/* Add Button - Always first */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <div className='flex justify-center items-center px-10'>
              <Button size="lg" variant="outline" className='h-24 flex flex-col items-center justify-center gap-2 cursor-pointer w-full max-w-56'> 
                <div className='w-10 h-10 rounded-full bg-foreground flex items-center justify-center'>
                  <PlusIcon className="h-6 w-6 text-primary" />
                </div>
                <span className='text-sm font-medium text-foreground'>Create new folder</span>
              </Button>
            </div>
          </DialogTrigger>

          <DialogContent className='sm:max-w-md'>
            <DialogHeader>
              <DialogTitle>Create New Folder</DialogTitle>
              <DialogDescription>Folders are used to organize related notebooks.</DialogDescription>
            </DialogHeader>

            <div className='flex items-center gap-2'>
              <Label htmlFor='folder-name' className='sr-only'>Folder Name</Label>
              <Input 
                id='folder-name'
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                placeholder='Enter folder name'
                onKeyDown={(e) => e.key === "Enter" && addFolder()}
              />
            </div>

            <DialogFooter className='sm:justify-start'>
              <DialogClose asChild>
                <Button type="button" onClick={addFolder}>
                  Create Folder
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Folders */}
        {folders.map((folder) => (
          <div key={folder.id} className='flex flex-col items-center justify-center px-10 w-full max-w-56'>
            {/* Custom Premium Folder Icon */}
            <svg
              className="h-16 w-16 mb-2 drop-shadow-md"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="folderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
              </defs>
              <path
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                fill="url(#folderGradient)"
                stroke="#1e40af"
                strokeWidth="0.5"
              />
              <path
                d="M3 7l3-3h8a2 2 0 012 2v1"
                fill="url(#folderGradient)"
                stroke="#1e40af"
                strokeWidth="0.5"
              />
            </svg>
            <h3 className='font-medium text-sm truncate w-full text-center'>{folder.name}</h3>
            <p className='text-xs text-muted-foreground'>{folder.notebooksCount} notebooks</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoldersGrid;