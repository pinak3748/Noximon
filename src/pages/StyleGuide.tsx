import {
  Bold,
  CalendarIcon,
  File,
  Italic,
  ListFilter,
  Underline,
} from 'lucide-react';

import {
  AnalyticsCard,
  Carousel,
  ComboboxDemo,
  ConfirmationModal,
  Header,
  LoadingButton,
  MultipleSelector,
  PhoneInput,
  SubSectionHeading,
} from '@/components/custom';
import {
  CarouselIndicator,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
} from '@/components/custom/Carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  AnalyticsCardView,
  DateFilterView,
  MultiSelectOptions,
} from '@/constants/dummyData';

function StyleGuide() {
  return (
    <div className="px-3">
      {/* Heading Component */}
      <Header heading="Dashboard" isSearchBarVisible={true} />

      {/* Analytics Card Component */}
      <main className="flex flex-1 flex-col gap-4 px-0 py-4 md:gap-8 md:py-5">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {AnalyticsCardView.map((card, index) => (
            <AnalyticsCard
              key={index}
              title={card.title}
              icon={card.icon}
              value={card.value}
              subValue={card.subValue}
            />
          ))}
        </div>
      </main>

      {/* Section 1 */}
      <div className="mt-6">
        {/* Sub Section Heading */}
        <SubSectionHeading
          heading="Initial Heading"
          subHeading="This is a list of recent activities"
        />

        <div className="mt-3 grid grid-cols-6 gap-4">
          {/* Text Input & Textarea Component */}
          <Card className="col-span-6 lg:col-span-4">
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
              <CardDescription>
                Lipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    className="w-full"
                    defaultValue="Gamer Gear Pro Controller"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                    className="min-h-32"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-6 lg:col-span-2">
            <CardHeader>
              <CardTitle>Utilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-3">
                  {/* Default Select Option */}
                  <Label htmlFor="status">Status</Label>
                  <Select>
                    <SelectTrigger id="status" aria-label="Select status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Active</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  {/* Default switch component */}
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Airplane Mode</Label>
                </div>
                <div>
                  <Label htmlFor="Badges">Badges</Label>
                  <div className="mt-1 flex flex-wrap gap-3">
                    {/* Default Badges */}
                    <Badge>Active</Badge>
                    <Badge variant={'secondary'}>Published</Badge>
                    <Badge variant={'outline'}>Featured</Badge>
                    <Badge variant={'destructive'}>Archived</Badge>
                  </div>
                </div>
                <div>
                  <Label htmlFor="Badges">Toggle Group</Label>
                  <div className="mt-1 flex justify-start">
                    {/* Default Toggle component */}
                    <ToggleGroup type="multiple">
                      <ToggleGroupItem value="bold" aria-label="Toggle bold">
                        <Bold className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="italic"
                        aria-label="Toggle italic"
                      >
                        <Italic className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="strikethrough"
                        aria-label="Toggle strikethrough"
                      >
                        <Underline className="h-4 w-4" />
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Section 2 */}
      <div className="mt-6">
        <SubSectionHeading
          heading="Initial Heading"
          subHeading="This is a list of recent activities"
        />
        <Tabs defaultValue="week" className="mt-6">
          <div className="flex items-center">
            {/* Random Table view */}
            <TabsList className="bg-primary/5">
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="year">Year</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 gap-1 bg-white text-sm"
                  >
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Fulfilled
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                size="sm"
                variant="outline"
                className="h-7 gap-1 bg-white text-sm"
              >
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only">Export</span>
              </Button>
            </div>
          </div>
          <TabsContent value="week">
            <Card x-chunk="dashboard-05-chunk-3">
              <CardHeader className="px-7">
                <CardTitle>Orders</CardTitle>
                <CardDescription>
                  Recent orders from your store.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Type
                      </TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Status
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Date
                      </TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="bg-accent">
                      <TableCell>
                        <div className="font-medium">Liam Johnson</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          liam@example.com
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        Sale
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge className="text-xs" variant="secondary">
                          Fulfilled
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        2023-06-23
                      </TableCell>
                      <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Olivia Smith</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          olivia@example.com
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        Refund
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge className="text-xs" variant="outline">
                          Declined
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        2023-06-24
                      </TableCell>
                      <TableCell className="text-right">$150.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Noah Williams</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          noah@example.com
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        Subscription
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge className="text-xs" variant="secondary">
                          Fulfilled
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        2023-06-25
                      </TableCell>
                      <TableCell className="text-right">$350.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Emma Brown</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          emma@example.com
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        Sale
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge className="text-xs" variant="secondary">
                          Fulfilled
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        2023-06-26
                      </TableCell>
                      <TableCell className="text-right">$450.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Liam Johnson</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          liam@example.com
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        Sale
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge className="text-xs" variant="secondary">
                          Fulfilled
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        2023-06-23
                      </TableCell>
                      <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Olivia Smith</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          olivia@example.com
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        Refund
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge className="text-xs" variant="outline">
                          Declined
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        2023-06-24
                      </TableCell>
                      <TableCell className="text-right">$150.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">Emma Brown</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          emma@example.com
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        Sale
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge className="text-xs" variant="secondary">
                          Fulfilled
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        2023-06-26
                      </TableCell>
                      <TableCell className="text-right">$450.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Section 3 || Custom component */}
      <div className="mt-6">
        <SubSectionHeading
          heading="Custom Components"
          subHeading="This is a list of recent activities"
        />
        <div className="mt-3 grid gap-5 lg:grid-cols-3">
          {/* Modal Type */}
          <Card>
            <CardHeader>
              <CardTitle>Modal Types</CardTitle>
              <CardDescription>
                We have different types of modals for different purposes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex-wrap gap-2 sm:flex">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary">Confirmation Modal</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <ConfirmationModal
                      type="success"
                      title={'Your search has started! 🥳'}
                      subtitle={
                        'Once completed, your lead list will appear on the Leads page.'
                      }
                      isLoading={false}
                      onCancel={() => {}}
                      onSubmit={() => {}}
                    />
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="destructive">Delection Modal</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <ConfirmationModal
                      type="destructive"
                      title={'Are you sure you want to delete this item?'}
                      subtitle={
                        'Once deleted, it cannot be recovered. Please proceed with caution.'
                      }
                      isLoading={false}
                      onCancel={() => {}}
                      onSubmit={() => {}}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>

          {/* Custom Data Filter */}
          <Card>
            <CardHeader>
              <CardTitle>Custom Date Filter</CardTitle>
              <CardDescription>
                Filter your data based on custom date ranges.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="gap-2 sm:flex">
                <ComboboxDemo
                  defaultValue="Date Filter"
                  list={DateFilterView}
                />
              </div>
            </CardContent>
          </Card>

          {/* Multi Select Option */}
          <Card>
            <CardHeader>
              <CardTitle>Multi Select Option</CardTitle>
              <CardDescription>
                Select multiple options from the list.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="gap-2 sm:flex">
                <MultipleSelector
                  defaultOptions={MultiSelectOptions}
                  placeholder="Select frameworks you like..."
                  emptyIndicator={
                    <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                      no results found.
                    </p>
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Loading Button */}
          <Card>
            <CardHeader>
              <CardTitle>Loading Button</CardTitle>
              <CardDescription>
                Types : default, secondary, destructive, outline, ghost, link
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex-wrap gap-4 sm:flex">
                <LoadingButton loading={true} onClick={() => {}}>
                  default
                </LoadingButton>
                <LoadingButton
                  variant="secondary"
                  loading={true}
                  onClick={() => {}}
                >
                  secondary
                </LoadingButton>
                <LoadingButton
                  variant="destructive"
                  loading={true}
                  onClick={() => {}}
                >
                  destructive
                </LoadingButton>
              </div>
            </CardContent>
          </Card>

          {/* Phone Number Input */}
          <Card>
            <CardHeader>
              <CardTitle>Phone number input</CardTitle>
              <CardDescription>
                Need to download a phone number library for country code to use
                this component
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex-wrap gap-4 sm:flex">
                <PhoneInput />
              </div>
            </CardContent>
          </Card>

          {/* Hoverable Card */}
          <Card>
            <CardHeader>
              <CardTitle>Hoverable Card</CardTitle>
              <CardDescription>
                Hover over the card to see the effect.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link">Ionio.ai</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://assets-global.website-files.com/62528d398a42424ab6390ee1/62528d398a42420373390f8c_favicon-32x32.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@Ionio.ai</h4>
                      <p className="text-sm">
                        Unleash Unprecedented Growth with AI - GPT4, LLMs & NLP
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
                        <span className="text-xs text-muted-foreground">
                          Joined December 2021
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-6">
        <SubSectionHeading
          heading="Custom Components"
          subHeading="This is a list of recent activities"
        />
        <div className="mt-3 grid gap-5 lg:grid-cols-3">
          <div className="space-y-5">
            <Carousel>
              <CarouselNext />
              <CarouselPrevious />
              <div className="relative ">
                <CarouselMainContainer className="h-60">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <SliderMainItem key={index} className="bg-transparent">
                      <div className="flex size-full items-center justify-center rounded-xl bg-background outline outline-1 outline-border">
                        Slide {index + 1}
                      </div>
                      {/* <img
                        src={`https://picsum.photos/seed/${index}/500/300`}
                        alt={`Slide ${index + 1}`}
                        className="h-full w-full rounded-xl object-cover"
                      /> */}
                    </SliderMainItem>
                  ))}
                </CarouselMainContainer>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                  <CarouselThumbsContainer className="gap-x-1 ">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselIndicator key={index} index={index} />
                    ))}
                  </CarouselThumbsContainer>
                </div>
              </div>
            </Carousel>

            <Separator />

            <Carousel>
              <CarouselNext className="top-1/3 -translate-y-1/3" />
              <CarouselPrevious className="top-1/3 -translate-y-1/3" />
              <CarouselMainContainer className="h-60">
                {Array.from({ length: 5 }).map((_, index) => (
                  <SliderMainItem key={index} className="bg-transparent">
                    <img
                      src={`https://picsum.photos/seed/${index + 10}/500/300`}
                      alt={`Slide ${index + 1}`}
                      className="h-full w-full rounded-xl object-cover"
                    />
                  </SliderMainItem>
                ))}
              </CarouselMainContainer>
              <CarouselThumbsContainer>
                {Array.from({ length: 5 }).map((_, index) => (
                  <SliderThumbItem
                    key={index}
                    index={index}
                    className="bg-transparent"
                  >
                    {/* <div className="flex size-full items-center justify-center rounded-xl bg-background outline outline-1 outline-border">
                      Slide {index + 1}
                    </div>{' '} */}
                    <img
                      src={`https://picsum.photos/seed/${index + 10}/500/300`}
                      alt={`Slide ${index + 1}`}
                      className="h-full w-full rounded-xl object-cover"
                    />
                  </SliderThumbItem>
                ))}
              </CarouselThumbsContainer>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StyleGuide;
