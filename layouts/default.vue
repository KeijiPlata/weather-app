<template>
    <div class="min-h-screen w-full bg-custompink text-black font-roboto px-4 sm:px-6 lg:px-8 flex flex-col gap-5">
        <Icon name="hugeicons:menu-two-line" class="text-5xl cursor-pointer text-custompink" />
        <div class="w-full flex flex-1 items-center justify-center">
            <slot />
        </div>
    </div>
</template>
