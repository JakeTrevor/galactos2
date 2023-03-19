import { Article, Author } from "@prisma/client";

export let sampleArticles: Omit<Article, "id" | "authorId">[] = [
  {
    title: "Hello world",
    topics: ["WAR"],
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci arcu, ornare vel consequat ac, varius eu augue. Quisque ac nibh in metus malesuada elementum. Donec et posuere augue, et fringilla urna. Cras mattis turpis at magna facilisis, vel convallis elit placerat. Sed hendrerit, purus rhoncus rutrum blandit, velit justo varius est, nec gravida velit mi quis orci. Ut ac tempus justo. Nullam vehicula ac sapien vel hendrerit. Quisque vel eros gravida, dictum ex eu, dictum lorem. Proin aliquet mi sapien, sed consectetur libero egestas fringilla.
    
    Praesent blandit eu nisl sed rhoncus. Nullam ut ex pretium, elementum libero sed, viverra odio. Donec arcu libero, vulputate ut ante vitae, finibus dictum nisl. Sed dignissim sem et justo lacinia, quis elementum augue mollis. Pellentesque vel leo eu nisl ultricies laoreet ut id dolor. Proin at pharetra nunc. Morbi dolor lacus, tincidunt sit amet ligula viverra, dapibus venenatis libero. In aliquet mauris erat, a egestas neque porttitor at. Quisque ac condimentum diam, id tempus libero. Donec erat orci, rhoncus at ex in, elementum eleifend urna. Nulla at dolor metus. Aenean purus arcu, ullamcorper eu porttitor nec, aliquam vel massa.
    
    Pellentesque id feugiat nisl. Praesent hendrerit tincidunt diam a eleifend. Quisque varius odio id nisl aliquam, vitae tincidunt sapien iaculis. Nunc sagittis molestie urna vel ultrices. Duis non turpis gravida urna dignissim tempus nec interdum magna. Donec dignissim, turpis molestie pellentesque faucibus, orci lorem congue ex, ac sagittis lectus arcu a dolor. Maecenas eu odio neque. Curabitur tincidunt quam ante, et sollicitudin ex cursus sit amet. Praesent sollicitudin purus sed erat feugiat venenatis. Cras sit amet sodales justo. Vivamus tincidunt bibendum mauris eu semper. Sed vel tortor in enim aliquet ullamcorper et eget dolor. In lobortis, purus et imperdiet posuere, dolor tellus aliquet tortor, non convallis dui justo in nibh. Nunc vitae ornare nisl. Donec convallis, neque et commodo vestibulum, nunc elit commodo urna, at laoreet leo augue vel velit. Nunc et nulla sit amet quam venenatis sollicitudin.
    
    In ac euismod lectus. Aenean sit amet est odio. Ut varius libero eleifend laoreet dignissim. Vivamus et est eros. Nam in justo mauris. Mauris sollicitudin diam eleifend aliquet tempor. Duis venenatis suscipit viverra. Suspendisse eget mauris molestie orci lobortis cursus id in est. Proin pretium erat nisl, ut maximus massa tristique consequat. Nunc vestibulum, orci nec hendrerit ornare, libero mi ornare dui, id vestibulum tellus diam in dolor. Donec condimentum nulla leo, nec laoreet lacus finibus eu.
    
    Phasellus ut magna eros. Proin eu semper justo. Vestibulum vulputate nisi eu ligula vehicula, vel luctus velit iaculis. Phasellus in mattis nunc. In enim tortor, faucibus eu enim eu, vehicula fringilla felis. Etiam varius placerat lorem et porta. Sed at pulvinar urna. Pellentesque vestibulum sit amet massa et cursus. Phasellus sit amet turpis orci. Donec ut lobortis est, quis ultrices mauris. Etiam ut iaculis libero, non efficitur justo. Ut viverra vulputate arcu ac iaculis.`,
    date: "10-12-14",
    image_url: "/helloWorld.jpg",
  },
];

export let sampleAuthors: Omit<Author, "slug">[] = [
  {
    id: "clenj47500000abtw5evpjaon",
    name: "Humphrey Appleby",
    description: "Sir Humphrey Appleby is....",
    job_title: "Economics And Government Editor",
    topics: ["WAR", "ECONOMY"],
    image_url: "",
  },
];
