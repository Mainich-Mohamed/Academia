import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PlusIcon } from 'lucide-react'
import React, { useState } from 'react'

interface Notebook {
    id: string,
    name: string,
    createdAt: Date
    sourcesNumber: number,
}

const NotebooksGrid = () => {
    // Lazy initialisation
    const [notebooks, setNotebooks] = useState<Notebook[]>(() => {
        const saved = localStorage.getItem('notebooks');
        return saved ? JSON.parse(saved) : [];
    })
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [newNotebookName, setNewNotebookName] = useState<string>('');

    const addNotebook = () => {
        if (newNotebookName.trim()) {
            const newNotebook: Notebook = {
                id: Date.now().toString(),
                name: newNotebookName,
                createdAt: new Date(),
                sourcesNumber: 0, // To change later
            }
            const updateNotebooks = [...notebooks, newNotebook];
            setNotebooks(updateNotebooks);
            localStorage.setItem('notebooks', JSON.stringify(updateNotebooks));
            setNewNotebookName('');
            setIsDialogOpen(false);
        }
    }

    const dateFormat = () => {
        const date = new Date();
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            })
    }

  return (
    <div className='flex justify-center mt-10'>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <div className='flex justify-center items-center px-10'>
              <Button size="lg" variant="outline" className='h-24 flex flex-col items-center justify-center gap-2 cursor-pointer w-full max-w-56'> 
                <div className='w-10 h-10 rounded-full bg-foreground flex items-center justify-center'>
                  <PlusIcon className="h-6 w-6 text-primary" />
                </div>
                <span className='text-sm font-medium text-foreground'>Create new notebook</span>
              </Button>
            </div>
          </DialogTrigger>
          <DialogContent className='sm:max-w-md'>
            <DialogHeader>
              <DialogTitle>Create New Notebook</DialogTitle>
              <DialogDescription>Notebooks will contain all your study sources.</DialogDescription>
            </DialogHeader>
            <div className='flex items-center gap-2'>
              <Label htmlFor='notebook-name' className='sr-only'>Notebook Name</Label>
              <Input 
                id='notebook-name'
                value={newNotebookName}
                onChange={(e) => setNewNotebookName(e.target.value)}
                placeholder='Enter notebook name'
                onKeyDown={(e) => e.key === "Enter" && addNotebook()}
              />
            </div>
            <DialogFooter className='sm:justify-start'>
              <DialogClose asChild>
                <Button type="button" onClick={addNotebook}>
                  Create Notebook
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
    </div>
  )
}

export default NotebooksGrid