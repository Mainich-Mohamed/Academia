import { Button } from '@/components/ui/button'
import { ButtonGroup, ButtonGroupSeparator } from '@/components/ui/button-group'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MenuIcon } from 'lucide-react';
import { useState } from 'react'

const ActionButtons = () => {
    const [sortBy, setSortBy] = useState<string>("recent");

    const sortOptions: Record<string, string> = {
        recent: "Most Recent",
        title: "Title",
    }
  return (
    <div className='flex justify-end gap-4'>
        <ButtonGroup className='flex items-center'> 
            <ButtonGroup>
                <Button >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M80-560v-320h320v320H80Zm80-80h160v-160H160v160ZM80-80v-320h320v320H80Zm80-80h160v-160H160v160Zm400-400v-320h320v320H560Zm80-80h160v-160H640v160ZM560-80v-320h320v320H560Zm80-80h160v-160H640v160ZM320-640Zm0 320Zm320-320Zm0 320Z"/></svg>
                </Button>
                <ButtonGroupSeparator />
                <Button>
                    <MenuIcon />
                </Button>
            </ButtonGroup>
        </ButtonGroup>

        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>
                    {sortOptions[sortBy]} 
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-360 280-560h400L480-360Z"/></svg>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end'>
                <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
                    <DropdownMenuRadioItem value='recent'>Most Recent</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value='title'>Title</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>

        <Button>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg> 
            New Folder
        </Button>
    </div>
  )
}

export default ActionButtons