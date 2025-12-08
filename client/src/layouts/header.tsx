import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Header = () => {
  const username = 'John Doe' // Example username
  const userInitials = username.split(' ').map(n => n[0]).join('').toUpperCase()

  return (
    <header className="bg-background">
      <div className="flex items-center justify-between mx-auto">
        {/* App Name */}
        <h1 className="text-2xl font-bold text-foreground">
          📚 Academia
        </h1>

        {/* User Section */}
        <div className="flex items-center space-x-3">
          <span className="text-sm text-muted-foreground hidden sm:inline">
            {username}
          </span>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/" alt={username} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {userInitials}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

export default Header