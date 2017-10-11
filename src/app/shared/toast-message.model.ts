export interface Message
{
	content: string;
	style: string | 'info';
	dismissed?: boolean;
}