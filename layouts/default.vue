<template>
    <div
        class="min-h-screen w-full bg-custompink text-black font-roboto p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center gap-5">
        <Navbar />
        <div class="w-full flex flex-1 items-center justify-center">
            <slot />
        </div>
    </div>
</template>
