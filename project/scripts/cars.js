const cars = [
    {
        Title: "car wrapping",
        imageUrl:
      "https://cdn.gencraft.com/prod/user/d72117ed-5924-46e2-b495-8bf9a3e37da4/96ba5081-67ff-492c-bac4-d7e16a68af76/image/image1_0.jpg?Expires=1721279174&Signature=qPfEYZ~gi-dtJD8oPSfnbzFOuqpm39XCmpwjPdw-HP5Iznzllv9hkV5m1qfaDv7bl7T3dnVB4zAWuqdiY6-7aln8pQq8GScT7PkL~4wjVmexaUE2vAKBidYdE7PsLRI3ps5AcDxbuDhN3zHjuu1-nglmQbcwhJdj5zapiizL-WdpT1zVQCS8vPjfk0RTeWTv5z2awqQ5Y-qhqdjHCJzVC~M~Z8M1MQRl9lu8mDBjYV-xOGufncy5KsdgpVtqyNRD4AvomaxLHroMLwMLcw3UboKr~RdDhY6cuRSm7WQRmhD3vNY826ughKvNPeNQBHheiFlxcamY9M2GpHdAKdkuVw__&Key-Pair-Id=K3RDDB1TZ8BHT8"
    },
    {
        Title: "car wrapping",
        imageUrl:
        "https://cdn.gencraft.com/prod/user/d72117ed-5924-46e2-b495-8bf9a3e37da4/69505975-7f1e-4aca-8d37-9fbcc8b5503b/image/image1_0.jpg?Expires=1721279039&Signature=KdC0HBbQq8WMySvhMc9uFmBgun-u4sSLy4r4I6Yn3Jlkj6J-12lGSc09BX0IpYlis4SyyFsXxtghFX-7N4~ruwqFEWWlaHY~dmOtfMqdE9XEqd4Tg9De9o4ex4T~3JBNQds7-Rtn-iZlQkdZi0NLYZ8hjCL6pt2mTJ3v44g5Khb2Z6IuRZq~0rq16jrwXnl4LUvSK35cM7MvGMgm3xCkU-H-f0waBgeoE~lgFWE6kvBtXMoNoZISAHv4-Z2dDHIHRAfoVzZ7C~FWvQ-J2ruCRl1NU2-z3PECjE4V1IWv35oiNxGLnfjg5p~jDH-k9gwfhqxNn4jCjyot0LPuKTL8ww__&Key-Pair-Id=K3RDDB1TZ8BHT8"
    },
    {
        Title: "car wrapping",
        imageUrl:
        "https://cdn.gencraft.com/prod/user/d72117ed-5924-46e2-b495-8bf9a3e37da4/96ba5081-67ff-492c-bac4-d7e16a68af76/image/image0_0.jpg?Expires=1721279174&Signature=kbToWIU8voyYo6Gq4e3X7Xh13xHNr6ix4rFEZzrggxrQJNzFC4JrxOTkkl7vwdBDNS1QQn4mUgCMo84SC50qfhCU7cBFcbzjgnCHSNfFKk~ClNxCvBwPHDbyuQa-HKw~K3LWdTc9prbMMjR10a1bKw-oGRsTtpDtox9EviUhDpU6rJeOh27P3lXM3Z8jxyJh7DlQzHENh4qnag8fjIGy-nTUWBW3C0FOufWHKlJVtngSwQR2ZqHguGwRVw7qlEqq-HY0sKQ11GKcBwV6cu9tUMJ8t3lQmbAyRtbaLhLg~6d9r4IVzWRW2mw1ztxzRDTErpIT25AwM2lU4HeerJuiOw__&Key-Pair-Id=K3RDDB1TZ8BHT8"
    },
    {
        Title: "car wrapping",
        imageUrl:
        "https://img.freepik.com/fotos-gratis/pessoa-trabalhando-no-envelopamento-de-carros_23-2149342664.jpg?t=st=1721191869~exp=1721195469~hmac=7634c406e60e702f2fe500415a5ef0843540be346c4f575198f75869cd3c0f65&w=826"
    },
    {
        Title: "car wrapping",
        imageUrl:
        "https://img.freepik.com/fotos-gratis/salao-de-servico-automatico-doign-embrulho-de-carro_23-2149593881.jpg?t=st=1721191796~exp=1721195396~hmac=d420067dcd98819734ccfb2aa1e59818152cf989b7f19064681f250ff2f66b54&w=826"
    },
    {
        Title: "car wrapping",
        imageUrl:
        "https://img.freepik.com/fotos-gratis/envelopamento-de-carro-com-papel-aluminio-no-servico-de-carro_1303-32341.jpg?t=st=1721192260~exp=1721195860~hmac=dbbb6d16433117c3ccc8242cce651389fee385da6595c905ac56833e4ef68757&w=740"
    },
];

document.addEventListener("DOMContentLoaded", () => {
    renderCars(cars);

    const hamButton = document.querySelector("#menu");
    const navigation = document.querySelector("nav.navigation");

    hamButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        hamButton.classList.toggle("open");

        if (navigation.classList.contains("open")) {
            const firstLink = navigation.querySelector("a");
            if (firstLink) {
                firstLink.focus();
            }
        }
    });
});

function renderCars(cars) {
    const carsGrid = document.querySelector(".cars-grid");
    carsGrid.innerHTML = '';

    cars.forEach(cars => {
        const carsCard = document.createElement("div");
        carsCard.classList.add("cars-card");

        carsCard.innerHTML = `
        <div class="cars-info">
            <p>Title: ${cars.Title}</p>
        </div>
        <div class="cars-image">
            <img src="${cars.imageUrl}" alt="${cars.Title}" loading="lazy" width="400" height="250">
        </div>
        `;

        carsGrid.appendChild(carsCard);
    });
}
