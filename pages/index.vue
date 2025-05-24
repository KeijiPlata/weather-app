<template>
    <div class="w-full h-full grid grid-cols-1 md:grid-cols-2 place-items-center gap-10">
        <div class="w-full h-full flex flex-col justify-center items-end">
            <div class="flex flex-col items-center justify-center">
                <h2 class="bg-black w-28 px-4 py-1 rounded-full text-custompink text-xl text-center">Sunny</h2>
                <p class="text-lg">Saturday, May 24</p>
                <h1 class="text-[8rem] font-ledger leading-none font-bold">31&deg;</h1>
                <p class="max-w-sm text-justify">
                    It feels like 28°C in Quezon City today, with high humidity and light rain in the afternoon.
                    Expect temperatures to range between 22°C and 30°C throughout the day.
                </p>
            </div>
        </div>
        <div class="w-full h-full flex justify-start items-center">
            <div class="bg-black w-full text-custompink max-w-md rounded-md md:rounded-lg p-5 grid grid-cols-3">
                <div class="w-full text-center flex flex-col gap-2 items-center justify-center">
                    <Icon name="lucide:wind" class="text-5xl text-custompink animate-wind" />
                    <div class="flex flex-col items-center justify-center">
                        <h2 class="text-2xl">4km/h</h2>
                        <p class="text-xs">Wind</p>
                    </div>
                </div>
                <div class="w-full text-center flex flex-col gap-2 items-center justify-center">
                    <Icon name="lucide:droplet" class="text-5xl cursor-pointer animate-bounce" />
                    <div class="flex flex-col items-center justify-center">
                        <h2 class="text-2xl">48%</h2>
                        <p class="text-xs">Humidity</p>
                    </div>
                </div>
                <div class="w-full text-center flex flex-col gap-2 items-center justify-center">
                    <Icon name="lucide:eye" class="text-5xl cursor-pointer animate-blink" />
                    <div class="flex flex-col items-center justify-center">
                        <h2 class="text-2xl">1.68km</h2>
                        <p class="text-xs">Visibility</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
