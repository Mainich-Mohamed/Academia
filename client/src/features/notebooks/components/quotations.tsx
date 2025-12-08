import { Spinner } from '@/components/ui/spinner';
import { useQuery } from '@tanstack/react-query';

const Quotations = () => {
    // Get the api URL
    const quotableApiUrl = import.meta.env.VITE_QUOTABLE_API_URL;

    // React Query to fetch the quotations from the api
    const { data: quoteData, isLoading, error } = useQuery({
        queryKey: ['random-quote'],
        queryFn: async () => {
            const response = await fetch(
                `${quotableApiUrl}/quotes/random?tags=work|science|success|power-quotes|perseverance|motivational|education`
            );

            if (!response.ok) {
                // Return fallback quote in the same format as API Response
                return[{
                    content: "Science is a way of thinking much more than it is a body of knowledge",
                    author: "Carl Sagan"
                }];
            }

            return response.json();
        },
        staleTime: 5 * 60 * 1000,
        retry: 2,
    });

    if (isLoading) {
        return (
            <div className='flex flex-col justify-center items-center w-full mt-10'>
                <blockquote className='text-xl italic font-semibold text-heading tracking-tight text-primary'>
                    <svg className="w-9 h-9 text-heading mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"/></svg>
                </blockquote>
                <Spinner className="size-6 text-primary" />        
            </div>
        )
    }

    if (error) {
        console.error('Failed to fetch quote:', error);
    }

    const quote = quoteData?.[0];

  return (
    <div className='flex justify-center mt-10 mb-15'>
        <blockquote className='text-xl italic font-semibold text-heading tracking-tight text-primary max-w-2xl '>
            <svg className="w-9 h-9 text-heading mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"/></svg>
            <p className='text-foreground mb-3'>"{quote.content}"</p>
            <span className='flex justify-end'>- {quote.author}</span>
        </blockquote>
    </div>
  )
}

export default Quotations